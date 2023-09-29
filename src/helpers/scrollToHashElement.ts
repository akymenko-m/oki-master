import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      const { hash } = location;

      const removeHashCharacter = (str: string) => str.slice(1);

      if (hash) {
        const element = document.getElementById(removeHashCharacter(hash));
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            inline: 'nearest',
          });
        }
      } else {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    };

    scrollToHash();
  }, [location]);

  return null;
}

export default ScrollToHashElement;
