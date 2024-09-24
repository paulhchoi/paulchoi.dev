import { ImageProps } from 'next/image'

export enum LINK {
  EMAIL = 'paul@paulchoi.dev',
  MAILTO_EMAIL = 'mailto:paul@paulchoi.dev',
  SITE = 'https://paulchoi.dev/',
  GITHUB = 'https://github.com/paulhchoi/',
  LINKEDIN = 'https://www.linkedin.com/in/paulhchoi/',

  METRO = 'https://metrophilly.org/',
  CITY_HILL = 'https://app.metrophilly.org/',
  PFC = 'https://pfc.us/',
  CLEANGREEN = 'https://www.cleanandgreenphilly.org/',
  HACKERONE = 'https://www.hackerone.com/',
  TEMPLE = 'https://www.temple.edu/',
}

export interface IRole {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}
