import React from 'react'
import './spark.css'
import SparkHero from '../../components/Spark/SparkHero.jsx'
import SparkProgramCards from '../../components/Spark/SparkProgramCards.jsx'
import SparkHighlight from '../../components/Spark/SparkHighlight.jsx'

function Spark() {
  return (
    <div className="spark-page">
      <SparkHero />
      <SparkProgramCards />
      <SparkHighlight />
    </div>
  )
}

export default Spark
