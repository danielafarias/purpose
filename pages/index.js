import Head from 'next/head';
import Welcome from '../components/Welcome';
import Forgot from './forgotpassword';

export default function Home() {
  return (
    <div>
      <Forgot />
    </div>
  )
}
