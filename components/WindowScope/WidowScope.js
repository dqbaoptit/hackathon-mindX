import RooadMapCard from '../RoadmapCard';
import ReactDOM from 'react-dom';
import React, { useEffect, useState, useRef } from 'react';
const WindowScope = (props) => {
  const containerEl = useRef(RooadMapCard);
  const externalWindow = useRef(null);

  useEffect(() => {
    externalWindow.current = window.open(
      '',
      '',
      'width=600,height=400,left=200,top=200'
    );
    const currentWindow = externalWindow.current;
    if (currentWindow) {
      currentWindow.document.body.appendChild(containerEl.current);
      return () => currentWindow.close();
    }
  }, []);

  return ReactDOM.createPortal(props.children, containerEl.current);
};

export default WindowScope;
