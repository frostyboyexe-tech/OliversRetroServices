import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

declare global {
  interface Window {
    hcaptcha?: {
      render: (container: string | HTMLElement, params: { sitekey: string }) => number | string;
      reset?: (widgetId?: number | string) => void;
    };
    web3formsOnload?: () => void;
  }
}

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements AfterViewInit {
  @ViewChild('captcha')
  private captchaEl?: ElementRef<HTMLElement>;

  private widgetId?: number | string;

  ngAfterViewInit(): void {
    // Web3Forms' script only scans the DOM once at load; in an Angular SPA the Contact route
    // renders after initial page load, so we load the script here.
    window.web3formsOnload = () => this.renderCaptcha();

    if (window.hcaptcha?.render) {
      this.renderCaptcha();
      return;
    }

    this.ensureWeb3FormsClientScriptLoaded().catch((err) => {
      // Keep failure non-fatal; form will still render, but without captcha.
      console.error('Failed to load Web3Forms client script for hCaptcha:', err);
    });
  }

  private renderCaptcha(): void {
    const el = this.captchaEl?.nativeElement;
    if (!el) return;

    const sitekey = el.dataset['sitekey'];
    if (!sitekey) return;

    // Avoid duplicate renders if navigating back to this route.
    el.innerHTML = '';

    this.widgetId = window.hcaptcha?.render(el, { sitekey });
  }

  private ensureWeb3FormsClientScriptLoaded(): Promise<void> {
    const id = 'web3forms-client-script';
    const src = 'https://web3forms.com/client/script.js';

    if (document.getElementById(id)) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.id = id;
      script.src = src;
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load ${src}`));
      document.body.appendChild(script);
    });
  }
}
