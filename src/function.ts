export const checkOnlineStatus = () => {
  /// check if window object available
  if (window && window.navigator) {
    return window.navigator.onLine;
  } else {
    console.warn("window object not available");
    return false;
  }
};



