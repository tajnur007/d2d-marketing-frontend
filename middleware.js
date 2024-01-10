import { NextResponse } from 'next/server';

const Middleware = (req) => {
  let verify = req.cookies.get('loggedin');
  let url = req.url;

  // if (
  //   !verify &&
  //   (url.includes('/dashboard') ||
  //     url.includes('/signin') ||
  //     url.includes('/signup') ||
  //     url.includes('/forget-password'))
  // ) {
  //   return NextResponse.redirect('http://localhost:3000/');
  // }

  // if (verify && url === 'http://localhost:3000/') {
  //   return NextResponse.redirect('http://localhost:3000/dashboard');
  // }
};

export default Middleware;
