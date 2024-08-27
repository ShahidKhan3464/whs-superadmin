import Cookies from 'js-cookie';

export function setUserAndToken(token, user) {
  Cookies.set('user', JSON.stringify(user));
  Cookies.set('auth-token', token, {
    sameSite: 'Strict', // Helps prevent CSRF attacks
    path: '/' // Accessible across the entire site
  });
}
