import React from 'react'
import Head from 'next/head'

const Download = (props) => {
  return (
    <>
      <div className="container">
        <Head>
          <title>Download - Camping app</title>
          <meta property="og:title" content="Download - Camping app" />
        </Head>
        <div className="hero">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1529859503572-5b9d1e68e952?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjYxODI1OTE&amp;ixlib=rb-1.2.1&amp;w=1200"
            className="image"
          />
          <div className="container1">
            <h1 className="text">Je bent op de goede weg</h1>
            <h2 className="text1">Het is simpel, beloofd</h2>
            <div className="btn-group">
              <button className="button">Download nu</button>
              <button className="button1 button">Hulp nodig?</button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: var(--dl-size-size-maxwidth);
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .image {
            width: 25rem;
            object-fit: cover;
          }
          .container1 {
            width: 701px;
            display: flex;
            flex-direction: column;
          }
          .text {
            font-size: 3rem;
          }
          .text1 {
            margin-top: var(--dl-space-space-unit);
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .btn-group {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .button {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .button:hover {
            transform: scale(1.02);
          }
          .button1 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .button1:hover {
            transform: scale(1.02);
          }
          @media (max-width: 991px) {
            .hero {
              padding: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .image {
              order: 2;
            }
            .container1 {
              align-items: center;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .text {
              text-align: center;
            }
            .text1 {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .image {
              width: 80%;
            }
          }
          @media (max-width: 479px) {
            .hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .btn-group {
              flex-direction: column;
            }
            .button1 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Download
