import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Box, Heading} from '@chakra-ui/react';
import {Navbar} from "../components/navbar/Navbar";
import {Hero} from "../components/hero-section/Hero";
import {Feature} from "../components/features/Feature";
import {Features} from "../components/features/Features";

export default function Home() {
  return (
    <Box>
      <Navbar/>
        <Hero/>
        <Features/>
    </Box>
  )
}
