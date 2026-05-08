import type { APIRoute } from 'astro';
import PocketBase from 'pocketbase';

export const POST: APIRoute = async ({ request }) => {
  const pb = new PocketBase(import.meta.env.POCKETBASE_URL || 'https://pb.barchy.online');

  try {
    const data = await request.json();

    if (!data.name || !data.email || !data.message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    await pb.collection('messages').create(data);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    return new Response(JSON.stringify({ error: 'Failed to submit message' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};