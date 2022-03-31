const defaultData = { scores: [/*{id: 1, username: "System", score: '000',},*/] }
const cacheKey = `data-2`

const DEBUG = true;

export async function onRequestGet({ env }) {
  try {
    return new Response(await getData(env), {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (e) {
    if (DEBUG) {
      return new Response(e.message || e.toString(), {
        status: 500,
      });
    }
    return new Response('Internal Error', { status: 500 });
  }
}

export async function onRequestPut({ request, env }) {
  try {
    const body = await request.text()
    const data = JSON.parse(body)
    await updateData(env, data);

    return new Response('Update OK', { status: 200 });
  } catch (e) {
    if (DEBUG) {
      console.log(e.message);
      return new Response(e.message || e.toString(), {
        status: 500,
      });
    }
    return new Response('Internal Error', { status: 500 });
  }
}

async function getData(env) {
  let data = await env.SCOREBOARD.get(cacheKey);
  if (!data) {
    data = JSON.stringify(defaultData);
  }

  return data;
}

async function updateData(env, data) {
  let cache = JSON.parse(await getData(env));

  cache.scores.push(data);

  await setData(env, JSON.stringify(cache));
}

async function setData(env, data) {
  await env.SCOREBOARD.put(cacheKey, data);
}