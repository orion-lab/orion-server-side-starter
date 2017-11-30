export default hook => ({ ...hook, data: { ...hook.data, createdAt: new Date() } });
