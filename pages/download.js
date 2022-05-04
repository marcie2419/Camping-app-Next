import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Download = (props) => {
  return (
    <>
      <div className="download-container">
        <Head>
          <title>Download - Camping app</title>
          <meta property="og:title" content="Download - Camping app" />
        </Head>
        <div className="download-hero">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHx3ZWJzaXRlfGVufDB8fHx8MTY0OTY5NzkzNA&amp;ixlib=rb-1.2.1&amp;w=1500"
            className="download-image"
          />
          <div className="download-container1">
            <h1 className="download-text">Bedankt!</h1>
            <a
              href="https://filetransfer.io/data-package/t5z3g26K/download"
              target="_blank"
              rel="noreferrer noopener"
              className="download-link"
            >
              <span>Klik hier om het bestand op te slaan</span>
              <br></br>
              <span></span>
              <br></br>
              <span></span>
            </a>
            <span className="download-text06">
              <span>
                Dit is versie 1.1. Kijk of dit correspondeert met de versie in
                de app.
              </span>
              <br></br>
              <span> Informatie -&gt; Versie</span>
            </span>
            <div className="download-btn-group">
              <button className="download-button button">Hulp nodig?</button>
            </div>
            <Link href="/">
              <a className="download-link1">
                &lt;- Keer terug naar de homepagina
              </a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .download-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .download-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: var(--dl-size-size-maxwidth);
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .download-image {
            width: 25rem;
            object-fit: cover;
          }
          .download-container1 {
            width: 701px;
            display: flex;
            flex-direction: column;
          }
          .download-text {
            font-size: 3rem;
          }
          .download-link {
            text-decoration: none;
          }
          .download-btn-group {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .download-button {
            transition: 0.3s;
            margin-left: 2px;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .download-button:hover {
            transform: scale(1.02);
          }
          .download-link1 {
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .download-hero {
              padding: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .download-image {
              order: 2;
            }
            .download-container1 {
              align-items: center;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .download-text {
              text-align: center;
            }
          }
          @media (max-width: 767px) {
            .download-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .download-image {
              width: 80%;
            }
            .download-text06 {
              width: var(--dl-size-size-xxlarge);
              height: var(--dl-size-size-medium);
            }
          }
          @media (max-width: 479px) {
            .download-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .download-container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .download-btn-group {
              flex-direction: column;
            }
            .download-button {
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
