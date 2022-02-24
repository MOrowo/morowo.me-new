import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { useEffect } from 'react';
const axios = require('axios').default;

const test: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id != null)
      axios.get(`https://morowo.me/api/${id}`).then((res: any) => {
        let result1 = document.getElementById('result1');
        if (result1) {
          if (res.data.status === 200) {
            const redirect_url = res.data.res;
            result1.innerHTML = 'redirecting to ' + redirect_url;
            window.location = redirect_url;
          }
          if (res.data.status === 404) {
            result1.classList.add('text-4xl');
            result1.innerHTML = 'Invalid link!';
          }
        }
      });
  }, [id]);
  return <div id="result1"></div>;
};

export default test;
