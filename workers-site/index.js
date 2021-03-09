import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler'
//import {v4 as uuidv4} from 'uuid'

const defaultData = { scores: [/*{id: 1, username: "System", score: '000',},*/]}
const cacheKey = `data-2`

const setCache = (key, data) => SCOREBOARD.put(key, data)
const getCache = key => SCOREBOARD.get(key)

async function updateKV(request) {
  const body = await request.text()
  //const uuid = uuidv4()
  //const cacheKey = `data-${uuid}`
  try {
    JSON.parse(body)
    await setCache(cacheKey, body)
    return new Response(body, { status: 200 })
  } catch (err) {
    return new Response(err, { status: 500 })
  }
}

async function getDynamicKV(){
    let data
    const cache = await getCache(cacheKey)
    if (!cache) {
      await setCache(cacheKey, JSON.stringify(defaultData))
      data = JSON.stringify(defaultData)
    } else {
      data = cache
    }
    return new Response(data, {
      headers: { 'Content-Type': 'application/json' },
    })
}

async function handleRsponse(event) {
  const request = event.request
  if (request.method === 'PUT') {
    return updateKV(request)
  } else if (request.url.includes('scoreboard.json')){
    return getDynamicKV()
  }{
    return getStaticKV(event)
  }
}

async function getStaticKV(event) {
  const url = new URL(event.request.url)
  let options = {}    
  try {
    if (DEBUG) {
      // customize caching
      options.cacheControl = {
        bypassCache: true,
      }
    }
    
    const page = await getAssetFromKV(event, options)
    
    // allow headers to be altered
    const response = new Response(page.body, page)

    response.headers.set('X-XSS-Protection', '1; mode=block')
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('Referrer-Policy', 'unsafe-url')
    response.headers.set('Feature-Policy', 'none')
    response.headers.set("cache-control", "max-age=2592000");

    return response

  } catch (e) {
    // if an error is thrown try to serve the asset at 404.html
    if (!DEBUG) {
      try {
        let notFoundResponse = await getAssetFromKV(event, {
          mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/404.html`, req),
        })

        return new Response(notFoundResponse.body, { ...notFoundResponse, status: 404 })
      } catch (e) {}
    }

    return new Response(e.message || e.toString(), { status: 500 })
  }
}

const DEBUG = false

addEventListener('fetch', event => {
  try {
    event.respondWith(handleRsponse(event))
  } catch (e) {
    if (DEBUG) {
      return event.respondWith(
        new Response(e.message || e.toString(), {
          status: 500,
        }),
      )
    }
    event.respondWith(new Response('Internal Error', { status: 500 }))
  }
})
