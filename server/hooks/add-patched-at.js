export default hook => ({ ...hook, data: { ...hook.data, patchedAt: new Date() } });
