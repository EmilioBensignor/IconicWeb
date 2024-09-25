export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    const supportsPassive = (() => {
      let supportsPassive = false;
      try {
        const opts = Object.defineProperty({}, 'passive', {
          get() {
            supportsPassive = true;
          }
        });
        window.addEventListener('testPassive', null, opts);
        window.removeEventListener('testPassive', null, opts);
      } catch (e) { }
      return supportsPassive;
    })();

    const originalAddEventListener = EventTarget.prototype.addEventListener;
    const originalRemoveEventListener = EventTarget.prototype.removeEventListener;

    EventTarget.prototype.addEventListener = function (type, listener, options) {
      const usesListenerOptions = typeof options === 'object';
      const useCapture = usesListenerOptions ? options.capture : options;

      if (type === 'touchstart' || type === 'touchmove') {
        options = usesListenerOptions ? options : {};
        options.passive = options.passive !== undefined ? options.passive : true;
      }

      return originalAddEventListener.call(this, type, listener, options);
    };

    EventTarget.prototype.removeEventListener = function (type, listener, options) {
      const usesListenerOptions = typeof options === 'object';
      const useCapture = usesListenerOptions ? options.capture : options;

      if (type === 'touchstart' || type === 'touchmove') {
        options = usesListenerOptions ? options : {};
        options.passive = options.passive !== undefined ? options.passive : true;
      }

      return originalRemoveEventListener.call(this, type, listener, options);
    };
  }
});