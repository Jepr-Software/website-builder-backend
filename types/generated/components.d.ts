import type { Schema, Struct } from '@strapi/strapi';

export interface BoxesBentoGridBox extends Struct.ComponentSchema {
  collectionName: 'components_boxes_bento_grid_boxes';
  info: {
    displayName: 'Bento grid box';
    icon: 'chartPie';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    position: Schema.Attribute.Enumeration<
      ['left', 'centerTop', 'centerBottom', 'right']
    >;
    title: Schema.Attribute.String;
  };
}

export interface BoxesTextOnlyBox extends Struct.ComponentSchema {
  collectionName: 'components_boxes_text_only_boxes';
  info: {
    displayName: 'Text only box';
    icon: 'archive';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface CtaDefault extends Struct.ComponentSchema {
  collectionName: 'components_cta_defaults';
  info: {
    displayName: 'Default';
    icon: 'archive';
  };
  attributes: {
    action: Schema.Attribute.Component<'links.button', false>;
    call: Schema.Attribute.Text;
  };
}

export interface LinksButton extends Struct.ComponentSchema {
  collectionName: 'components_links_buttons';
  info: {
    displayName: 'Button';
    icon: 'arrowRight';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['primary', 'secondary', 'tertiary']>;
  };
}

export interface LinksTextLink extends Struct.ComponentSchema {
  collectionName: 'components_links_text_links';
  info: {
    displayName: 'Text link';
    icon: 'arrowRight';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SectionComponentBentoGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_component_bento_grids';
  info: {
    description: '';
    displayName: 'Bento grid';
    icon: 'apps';
  };
  attributes: {
    bentoGridBox: Schema.Attribute.Component<'boxes.bento-grid-box', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 4;
        },
        number
      >;
    title: Schema.Attribute.String;
  };
}

export interface SectionComponentBlogContentOnly
  extends Struct.ComponentSchema {
  collectionName: 'components_section_component_blog_content_onlies';
  info: {
    displayName: 'Blog content only';
    icon: 'chartBubble';
  };
  attributes: {
    content: Schema.Attribute.RichText;
  };
}

export interface SectionComponentBlogImageOnly extends Struct.ComponentSchema {
  collectionName: 'components_section_component_blog_image_onlies';
  info: {
    description: '';
    displayName: 'Blog image only';
    icon: 'brush';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    subTextForImage: Schema.Attribute.Text;
  };
}

export interface SectionComponentBlogImageWithText
  extends Struct.ComponentSchema {
  collectionName: 'components_section_component_blog_image_with_texts';
  info: {
    displayName: 'Blog image with text';
    icon: 'chartBubble';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    imageDirection: Schema.Attribute.Enumeration<['left', 'right']>;
  };
}

export interface SectionComponentBoxGrid extends Struct.ComponentSchema {
  collectionName: 'components_section_component_box_grids';
  info: {
    displayName: 'Box grid';
    icon: 'apps';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    content: Schema.Attribute.RichText;
    textOnlyBox: Schema.Attribute.Component<'boxes.text-only-box', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 3;
        },
        number
      >;
    title: Schema.Attribute.String;
  };
}

export interface SectionComponentFaq extends Struct.ComponentSchema {
  collectionName: 'components_section_component_faqs';
  info: {
    description: '';
    displayName: 'Faq';
    icon: 'italic';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    textOnlyBox: Schema.Attribute.Component<'boxes.text-only-box', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 12;
          min: 3;
        },
        number
      >;
    title: Schema.Attribute.String;
  };
}

export interface SectionComponentFullSizeText extends Struct.ComponentSchema {
  collectionName: 'components_section_component_full_size_texts';
  info: {
    description: '';
    displayName: 'Full size text';
    icon: 'bold';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionComponentHeroTextOnly extends Struct.ComponentSchema {
  collectionName: 'components_section_component_hero_text_onlies';
  info: {
    description: '';
    displayName: 'Hero text only';
    icon: 'apps';
  };
  attributes: {
    content: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionComponentHeroTextWithImage
  extends Struct.ComponentSchema {
  collectionName: 'components_section_component_hero_text_with_images';
  info: {
    description: '';
    displayName: 'Hero text with image';
    icon: 'briefcase';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files'>;
    primaryButton: Schema.Attribute.Component<'links.button', false>;
    secondaryButton: Schema.Attribute.Component<'links.button', false>;
    title: Schema.Attribute.String;
    titleImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SectionComponentTextWithImageBox
  extends Struct.ComponentSchema {
  collectionName: 'components_section_component_text_with_image_boxes';
  info: {
    description: '';
    displayName: 'Text with image box';
    icon: 'chartBubble';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    cta: Schema.Attribute.Component<'cta.default', false>;
    image: Schema.Attribute.Media<'images'>;
    imageDirection: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'right'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'alien';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    preventIndexing: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'boxes.bento-grid-box': BoxesBentoGridBox;
      'boxes.text-only-box': BoxesTextOnlyBox;
      'cta.default': CtaDefault;
      'links.button': LinksButton;
      'links.text-link': LinksTextLink;
      'section-component.bento-grid': SectionComponentBentoGrid;
      'section-component.blog-content-only': SectionComponentBlogContentOnly;
      'section-component.blog-image-only': SectionComponentBlogImageOnly;
      'section-component.blog-image-with-text': SectionComponentBlogImageWithText;
      'section-component.box-grid': SectionComponentBoxGrid;
      'section-component.faq': SectionComponentFaq;
      'section-component.full-size-text': SectionComponentFullSizeText;
      'section-component.hero-text-only': SectionComponentHeroTextOnly;
      'section-component.hero-text-with-image': SectionComponentHeroTextWithImage;
      'section-component.text-with-image-box': SectionComponentTextWithImageBox;
      'shared.seo': SharedSeo;
    }
  }
}
