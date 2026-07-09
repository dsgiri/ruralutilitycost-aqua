import { useEffect, useRef } from 'react';
import { trackEvent } from './analytics';

export function useToolCompleted(toolName: string, inputs: any) {
  const timeoutRef = useRef<number | null>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      trackEvent('tool_completed', { tool_name: toolName });
    }, 2000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [inputs, toolName]);
}
