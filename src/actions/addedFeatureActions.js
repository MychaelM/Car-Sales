export const addFeature = newFeature => {
  return { type: "ADD_FEATURE", payload: newFeature };
}

export const removeFeature = removeFeature => {
 return { type: "REMOVE_FEATURE", payload: removeFeature };
}