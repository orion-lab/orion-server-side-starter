export default function composeHook(initialState = {}) {
  const hookData = {
    result: {},
    data: {},
  };
  return { ...hookData, ...initialState };
}
