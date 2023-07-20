const loadScript = (src, callback) => {
    const existingScript = document.querySelector(`script[src="${src}"]`);
  
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = src;
  
      script.onload = () => {
        if (callback && typeof callback === 'function') {
          callback();
        }
      };
  
      document.head.appendChild(script);
    } else {
      if (callback && typeof callback === 'function') {
        callback();
      }
    }
  };
  
  export default loadScript;
  