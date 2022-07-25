import React from "react";
import App from "next/app";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Head from "next/head";
import style from "../styles/globals.css";

export default class MyApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <div align="center">
        <Head>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />
              <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
                crossOrigin="anonymous"
              />
              <title>:: Front-end ::</title>
            </head>
            <body></body>
          </html>
        </Head>
        <Nav />
        <Component />
        <Footer />
      </div>
    );
  }
}
