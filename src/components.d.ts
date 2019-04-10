/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@ionic/core';
import 'ionicons';


export namespace Components {

  interface EnjinSidebarComponent {}
  interface EnjinSidebarComponentAttributes extends StencilHTMLAttributes {}

  interface EnjinGallery {}
  interface EnjinGalleryAttributes extends StencilHTMLAttributes {}

  interface EnjinOrganism {
    /**
    * A description of what the organism does
    */
    'description'?: string;
    /**
    * The name of the organism
    */
    'name': string;
    /**
    * A list of props with descriptions
    */
    'propList'?: {
      /**
      * The name of the prop
      */
      name: string;
      /**
      * A description of the prop
      */
      description: string;
    }[];
    /**
    * Shrink organism to only show name and description
    */
    'viewLess': () => Promise<void>;
    /**
    * Expand organism to show preview frame and props info
    */
    'viewMore': (options?: { scrollIntoView: boolean; }) => Promise<void>;
  }
  interface EnjinOrganismAttributes extends StencilHTMLAttributes {
    /**
    * A description of what the organism does
    */
    'description'?: string;
    /**
    * The name of the organism
    */
    'name'?: string;
    /**
    * A list of props with descriptions
    */
    'propList'?: {
      /**
      * The name of the prop
      */
      name: string;
      /**
      * A description of the prop
      */
      description: string;
    }[];
  }

  interface EnjinPayWithCard {
    'stripeKey': string;
  }
  interface EnjinPayWithCardAttributes extends StencilHTMLAttributes {
    'onEnjinCardSubmit'?: (event: CustomEvent) => void;
    'stripeKey'?: string;
  }

  interface EnjinSidebar {
    'components': any;
  }
  interface EnjinSidebarAttributes extends StencilHTMLAttributes {
    'components'?: any;
  }

  interface EnjinStarRatingScoped {
    'disabled': boolean;
    'maxRating': number;
    'name': string;
    'setCurrentRating': (rating: any) => void;
    'value': string;
  }
  interface EnjinStarRatingScopedAttributes extends StencilHTMLAttributes {
    'disabled'?: boolean;
    'maxRating'?: number;
    'name'?: string;
    'onFtStarRating'?: (event: CustomEvent) => void;
    'value'?: string;
  }

  interface EnjinStarRatingShadow {
    'disabled': boolean;
    'maxRating': number;
    'name': string;
    'setCurrentRating': (rating: any) => void;
    'value': string;
  }
  interface EnjinStarRatingShadowAttributes extends StencilHTMLAttributes {
    'disabled'?: boolean;
    'maxRating'?: number;
    'name'?: string;
    'onFtStarRating'?: (event: CustomEvent) => void;
    'value'?: string;
  }

  interface EnjinStarRating {
    /**
    * Whether or not the field is disabled
    */
    'disabled': boolean;
    /**
    * The max available star rating
    */
    'maxRating': number;
    /**
    * The name of the input
    */
    'name': string;
    /**
    * Set the current rating
    */
    'setCurrentRating': (rating: any) => void;
    /**
    * The value of the rating input
    */
    'value': string;
  }
  interface EnjinStarRatingAttributes extends StencilHTMLAttributes {
    /**
    * Whether or not the field is disabled
    */
    'disabled'?: boolean;
    /**
    * The max available star rating
    */
    'maxRating'?: number;
    /**
    * The name of the input
    */
    'name'?: string;
    'onEnjinStarRating'?: (event: CustomEvent) => void;
    /**
    * The value of the rating input
    */
    'value'?: string;
  }

  interface EnjinTestComponent {}
  interface EnjinTestComponentAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'EnjinSidebarComponent': Components.EnjinSidebarComponent;
    'EnjinGallery': Components.EnjinGallery;
    'EnjinOrganism': Components.EnjinOrganism;
    'EnjinPayWithCard': Components.EnjinPayWithCard;
    'EnjinSidebar': Components.EnjinSidebar;
    'EnjinStarRatingScoped': Components.EnjinStarRatingScoped;
    'EnjinStarRatingShadow': Components.EnjinStarRatingShadow;
    'EnjinStarRating': Components.EnjinStarRating;
    'EnjinTestComponent': Components.EnjinTestComponent;
  }

  interface StencilIntrinsicElements {
    'enjin-sidebar-component': Components.EnjinSidebarComponentAttributes;
    'enjin-gallery': Components.EnjinGalleryAttributes;
    'enjin-organism': Components.EnjinOrganismAttributes;
    'enjin-pay-with-card': Components.EnjinPayWithCardAttributes;
    'enjin-sidebar': Components.EnjinSidebarAttributes;
    'enjin-star-rating-scoped': Components.EnjinStarRatingScopedAttributes;
    'enjin-star-rating-shadow': Components.EnjinStarRatingShadowAttributes;
    'enjin-star-rating': Components.EnjinStarRatingAttributes;
    'enjin-test-component': Components.EnjinTestComponentAttributes;
  }


  interface HTMLEnjinSidebarComponentElement extends Components.EnjinSidebarComponent, HTMLStencilElement {}
  var HTMLEnjinSidebarComponentElement: {
    prototype: HTMLEnjinSidebarComponentElement;
    new (): HTMLEnjinSidebarComponentElement;
  };

  interface HTMLEnjinGalleryElement extends Components.EnjinGallery, HTMLStencilElement {}
  var HTMLEnjinGalleryElement: {
    prototype: HTMLEnjinGalleryElement;
    new (): HTMLEnjinGalleryElement;
  };

  interface HTMLEnjinOrganismElement extends Components.EnjinOrganism, HTMLStencilElement {}
  var HTMLEnjinOrganismElement: {
    prototype: HTMLEnjinOrganismElement;
    new (): HTMLEnjinOrganismElement;
  };

  interface HTMLEnjinPayWithCardElement extends Components.EnjinPayWithCard, HTMLStencilElement {}
  var HTMLEnjinPayWithCardElement: {
    prototype: HTMLEnjinPayWithCardElement;
    new (): HTMLEnjinPayWithCardElement;
  };

  interface HTMLEnjinSidebarElement extends Components.EnjinSidebar, HTMLStencilElement {}
  var HTMLEnjinSidebarElement: {
    prototype: HTMLEnjinSidebarElement;
    new (): HTMLEnjinSidebarElement;
  };

  interface HTMLEnjinStarRatingScopedElement extends Components.EnjinStarRatingScoped, HTMLStencilElement {}
  var HTMLEnjinStarRatingScopedElement: {
    prototype: HTMLEnjinStarRatingScopedElement;
    new (): HTMLEnjinStarRatingScopedElement;
  };

  interface HTMLEnjinStarRatingShadowElement extends Components.EnjinStarRatingShadow, HTMLStencilElement {}
  var HTMLEnjinStarRatingShadowElement: {
    prototype: HTMLEnjinStarRatingShadowElement;
    new (): HTMLEnjinStarRatingShadowElement;
  };

  interface HTMLEnjinStarRatingElement extends Components.EnjinStarRating, HTMLStencilElement {}
  var HTMLEnjinStarRatingElement: {
    prototype: HTMLEnjinStarRatingElement;
    new (): HTMLEnjinStarRatingElement;
  };

  interface HTMLEnjinTestComponentElement extends Components.EnjinTestComponent, HTMLStencilElement {}
  var HTMLEnjinTestComponentElement: {
    prototype: HTMLEnjinTestComponentElement;
    new (): HTMLEnjinTestComponentElement;
  };

  interface HTMLElementTagNameMap {
    'enjin-sidebar-component': HTMLEnjinSidebarComponentElement
    'enjin-gallery': HTMLEnjinGalleryElement
    'enjin-organism': HTMLEnjinOrganismElement
    'enjin-pay-with-card': HTMLEnjinPayWithCardElement
    'enjin-sidebar': HTMLEnjinSidebarElement
    'enjin-star-rating-scoped': HTMLEnjinStarRatingScopedElement
    'enjin-star-rating-shadow': HTMLEnjinStarRatingShadowElement
    'enjin-star-rating': HTMLEnjinStarRatingElement
    'enjin-test-component': HTMLEnjinTestComponentElement
  }

  interface ElementTagNameMap {
    'enjin-sidebar-component': HTMLEnjinSidebarComponentElement;
    'enjin-gallery': HTMLEnjinGalleryElement;
    'enjin-organism': HTMLEnjinOrganismElement;
    'enjin-pay-with-card': HTMLEnjinPayWithCardElement;
    'enjin-sidebar': HTMLEnjinSidebarElement;
    'enjin-star-rating-scoped': HTMLEnjinStarRatingScopedElement;
    'enjin-star-rating-shadow': HTMLEnjinStarRatingShadowElement;
    'enjin-star-rating': HTMLEnjinStarRatingElement;
    'enjin-test-component': HTMLEnjinTestComponentElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
