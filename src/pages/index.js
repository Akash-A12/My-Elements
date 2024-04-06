import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layout/Layout'
import Link from 'next/link'

export default function Home() {

  return (
    <Layout>
            <h1 className="text-center text-4xl font-bold m-10">NextGram</h1>
    </Layout>
  )
}
