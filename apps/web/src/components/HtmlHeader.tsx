import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import Helmet, { HelmetProps } from 'react-helmet'
import '../../static/base.css'

export interface HtmlHeaderProps extends HelmetProps {
  description?: string
  lang?: string
  keywords?: string[]
}

export function HtmlHeader({
  description,
  lang,
  meta,
  keywords,
  title,
}: HtmlHeaderProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={[
        {
          href: '//31.media.tumblr.com/avatar_ab7b0e10f1c2_128.png',
          rel: 'shortcut icon',
          type: 'image/png',
        },
        {
          href: '//31.media.tumblr.com/avatar_ab7b0e10f1c2_128.png',
          rel: 'apple-touch-icon',
          type: 'image/png',
        },
      ]}
      meta={[
        {
          name: `theme-color`,
          content: `#ffffff`,
        },
        {
          httpEquiv: `Content-Type`,
          content: `text/html; charset=utf-8`,
        },
        {
          httpEquiv: `Content-language`,
          content: `en`,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `googlebot`,
          content: `index,follow`,
        },
        {
          name: `google`,
          content: `notranslate`,
        },
        {
          name: `url`,
          content: `https://xaviercarpentier.com/`,
        },
      ]
        .concat(
          keywords && keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : [],
        )
        // @ts-ignore
        .concat(meta)}
    />
  )
}

HtmlHeader.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}
