'use client'
 
import { useReportWebVitals } from 'next/web-vitals'
 
export default function Test() {
  useReportWebVitals((metric) => {
    console.log(metric)
  })
}