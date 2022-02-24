import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { useEffect } from 'react';

const Id: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id != null)
      fetch(`/api/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((res: any) => res.json())
        .then((data: any) => {
          let result1 = document.getElementById('result1');
          if (result1) {
            if (data.status === 200) {
              const redirect_url = data.res;
              result1.innerHTML = 'redirecting to ' + redirect_url;
              window.location = redirect_url;
            }
            if (data.status === 404) {
              result1.classList.add('text-4xl');
              result1.innerHTML = 'Invalid link!';
            }
          }
        });
  }, [id]);
  return <div id="result1"></div>;
};

export default Id;
