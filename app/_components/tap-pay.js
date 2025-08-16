'use client';
import Script from 'next/script';
import { useEffect } from 'react';

export default function TapPay() {
  return (
    <Script
      src="https://js.tappaysdk.com/sdk/tpdirect/v5.20.0"
      crossOrigin="anonymous"
      integrity="sha256-7kLpXU5hSNGwwdwa0lCLxNzy4s8XMvZoaB1Y8kp33FY="
      type="text/javascript"
      onReady={() => {
        window.TPDirect.setupSDK(
          process.env.NEXT_PUBLIC_TAPPAY_ID,
          process.env.NEXT_PUBLIC_TAPPAY_KEY,
          'sandbox'
        );
      }}
    />
  );
}
