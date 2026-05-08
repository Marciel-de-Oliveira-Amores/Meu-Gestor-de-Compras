package com.example.gestordecompras;

import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Cria a tela que vai mostrar o seu site/app
        WebView myWebView = new WebView(this);
        setContentView(myWebView);

        // Habilita o JavaScript para as somas funcionarem
        WebSettings webSettings = myWebView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setDomStorageEnabled(true);

        // Garante que links abram dentro do próprio app
        myWebView.setWebViewClient(new WebViewClient());

        // Carrega o arquivo que está na pasta assets
        myWebView.loadUrl("file:///android_asset/index.html");
    }
}