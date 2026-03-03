export const GET = async () => {
  return new Response(
    JSON.stringify({
      status: 'healthy',
      uptime: process.uptime(),
      version: '1.0.0',
      timestamp: new Date().toISOString(),
      datacenter: 'Cloudflare Edge',
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
};
