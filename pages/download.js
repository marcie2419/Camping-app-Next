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
            src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHx3ZWJzaXRlfGVufDB8fHx8MTY0OTY5NzkzNA&amp;ixlib=rb-1.2.1&amp;w=1500"
            className="image"
          />
          <div className="container1">
            <h1 className="text">Bedankt!</h1>
            <a
              href="https://cdn-149.anonfiles.com/v7L3J8V8x9/9c39dd77-1649700020/app-381460_android_standalone_build-212286.apk"
              target="_blank"
              rel="noreferrer noopener"
              className="link"
            >
              Klik hier om het bestand op te slaan
            </a>
            <div className="btn-group">
              <button className="button">Hulp nodig?</button>
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
          .link {
            text-decoration: none;
          }
          .btn-group {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .button {
            transition: 0.3s;
            margin-left: 2px;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .button:hover {
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
            .button {
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
