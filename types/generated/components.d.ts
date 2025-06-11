import type { Struct, Schema } from '@strapi/strapi';

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'Seo';
    icon: 'alien';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    keywords: Schema.Attribute.String;
    preventIndexing: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface SectionComponentTextWithImageBox
  extends Struct.ComponentSchema {
  collectionName: 'components_section_component_text_with_image_boxes';
  info: {
    displayName: 'Text with image box';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    content: Schema.Attribute.RichText;
    imageDirection: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'right'>;
    cta: Schema.Attribute.Component<'cta.default', false>;
  };
}

export interface SectionComponentHeroTextWithImage
  extends Struct.ComponentSchema {
  collectionName: 'components_section_component_hero_text_with_images';
  info: {
    displayName: 'Hero text with image';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files'>;
    primaryButton: Schema.Attribute.Component<'links.button', false>;
    secondaryButton: Schema.Attribute.Component<'links.button', false>;
    titleImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SectionComponentHeroTextOnly extends Struct.ComponentSchema {
  collectionName: 'components_section_component_hero_text_onlies';
  info: {
    displayName: 'Hero text only';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    content: Schema.Attribute.Text;
  };
}

export interface SectionComponentFullSizeText extends Struct.ComponentSchema {
  collectionName: 'components_section_component_full_size_texts';
  info: {
    displayName: 'Full size text';
    icon: 'bold';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    content: Schema.Attribute.RichText;
  };
}

export interface SectionComponentFaq extends Struct.ComponentSchema {
  collectionName: 'components_section_component_faqs';
  info: {
    displayName: 'Faq';
    icon: 'italic';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    textOnlyBox: Schema.Attribute.Component<'boxes.text-only-box', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 3;
          max: 12;
        },
        number
      >;
    content: Schema.Attribute.RichText;
  };
}

export interface SectionComponentBoxGrid extends Struct.ComponentSchema {
  collectionName: 'components_section_component_box_grids';
  info: {
    displayName: 'Box grid';
    icon: 'apps';
  };
  attributes: {
    title: Schema.Attribute.String;
    content: Schema.Attribute.RichText;
    backgroundImage: Schema.Attribute.Media<'images'>;
    textOnlyBox: Schema.Attribute.Component<'boxes.text-only-box', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 3;
          max: 12;
        },
        number
      >;
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

export interface SectionComponentBlogImageOnly extends Struct.ComponentSchema {
  collectionName: 'components_section_component_blog_image_onlies';
  info: {
    displayName: 'Blog image only';
    icon: 'brush';
    description: '';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    subTextForImage: Schema.Attribute.Text;
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

export interface SectionComponentBentoGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_component_bento_grids';
  info: {
    displayName: 'Bento grid';
    icon: 'apps';
    description: '';
  };
  attributes: {
    bentoGridBox: Schema.Attribute.Component<'boxes.bento-grid-box', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 4;
          max: 4;
        },
        number
      >;
    title: Schema.Attribute.String;
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

export interface CtaDefault extends Struct.ComponentSchema {
  collectionName: 'components_cta_defaults';
  info: {
    displayName: 'Default';
    icon: 'archive';
  };
  attributes: {
    call: Schema.Attribute.Text;
    action: Schema.Attribute.Component<'links.button', false>;
  };
}

export interface BoxesTextOnlyBox extends Struct.ComponentSchema {
  collectionName: 'components_boxes_text_only_boxes';
  info: {
    displayName: 'Text only box';
    icon: 'archive';
  };
  attributes: {
    title: Schema.Attribute.String;
    content: Schema.Attribute.RichText;
  };
}

export interface BoxesBentoGridBox extends Struct.ComponentSchema {
  collectionName: 'components_boxes_bento_grid_boxes';
  info: {
    displayName: 'Bento grid box';
    icon: 'chartPie';
  };
  attributes: {
    title: Schema.Attribute.String;
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    position: Schema.Attribute.Enumeration<
      ['left', 'centerTop', 'centerBottom', 'right']
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.seo': SharedSeo;
      'section-component.text-with-image-box': SectionComponentTextWithImageBox;
      'section-component.hero-text-with-image': SectionComponentHeroTextWithImage;
      'section-component.hero-text-only': SectionComponentHeroTextOnly;
      'section-component.full-size-text': SectionComponentFullSizeText;
      'section-component.faq': SectionComponentFaq;
      'section-component.box-grid': SectionComponentBoxGrid;
      'section-component.blog-image-with-text': SectionComponentBlogImageWithText;
      'section-component.blog-image-only': SectionComponentBlogImageOnly;
      'section-component.blog-content-only': SectionComponentBlogContentOnly;
      'section-component.bento-grid': SectionComponentBentoGrid;
      'links.text-link': LinksTextLink;
      'links.button': LinksButton;
      'cta.default': CtaDefault;
      'boxes.text-only-box': BoxesTextOnlyBox;
      'boxes.bento-grid-box': BoxesBentoGridBox;
    }
  }
}
