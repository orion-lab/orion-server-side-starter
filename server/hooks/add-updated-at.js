export default hook => ({ ...hook, data: { ...hook.data, updatedAt: new Date() } });
