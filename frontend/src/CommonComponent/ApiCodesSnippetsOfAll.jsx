import React, { useState } from 'react';

const codeSnippets = {
  PHP: `<?php
$curl = curl_init();
curl_setopt_array($curl, array(
  CURLOPT_URL => "https://console.authkey.io/restapi/requestjson.php",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => json_encode([
    "country_code" => "91",
    "mobile" => "xxxxx",
    "sid" => "**"
  ]),
  CURLOPT_HTTPHEADER => array(
    "Content-Type: application/json",
    "Authorization: Basic <Api_Key>"
  ),
));
$response = curl_exec($curl);
curl_close($curl);
echo $response;
?>`,
  Python: `import requests
url = "https://console.authkey.io/restapi/requestjson.php"
headers = {
  "Content-Type": "application/json",
  "Authorization": "Basic <Api_Key>"
}
data = {
  "country_code": "91",
  "mobile": "xxxxx",
  "sid": "**"
}
response = requests.post(url, headers=headers, json=data)
print(response.text)`,
  Go: `package main
import (
  "bytes"
  "encoding/json"
  "fmt"
  "net/http"
)
func main() {
  url := "https://console.authkey.io/restapi/requestjson.php"
  data := map[string]string{
    "country_code": "91",
    "mobile": "xxxxx",
    "sid": "**",
  }
  jsonData, _ := json.Marshal(data)
  req, _ := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
  req.Header.Set("Content-Type", "application/json")
  req.Header.Set("Authorization", "Basic <Api_Key>")
  client := &http.Client{}
  resp, _ := client.Do(req)
  defer resp.Body.Close()
  fmt.Println(resp.Status)
}`,
  Java: `import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
public class Main {
  public static void main(String[] args) throws Exception {
    URL url = new URL("https://console.authkey.io/restapi/requestjson.php");
    HttpURLConnection conn = (HttpURLConnection) url.openConnection();
    conn.setRequestMethod("POST");
    conn.setRequestProperty("Content-Type", "application/json");
    conn.setRequestProperty("Authorization", "Basic <Api_Key>");
    conn.setDoOutput(true);
    String jsonInputString = "{\"country_code\":\"91\",\"mobile\":\"xxxxx\",\"sid\":\"**\"}";
    try (OutputStream os = conn.getOutputStream()) {
        byte[] input = jsonInputString.getBytes("utf-8");
        os.write(input, 0, input.length);
    }
    System.out.println(conn.getResponseCode());
  }
}`,
  JavaScript: `var request = require('request');
var options = {
  method: 'POST',
  url: 'https://console.authkey.io/restapi/requestjson.php',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Basic <Api_Key>'
  },
  body: JSON.stringify({
    "country_code": "91",
    "mobile": "xxxxx",
    "sid": "**"
  })
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});`,
  cURL: `curl -X POST https://console.authkey.io/restapi/requestjson.php \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Basic <Api_Key>" \\
  -d '{"country_code":"91","mobile":"xxxxx","sid":"**"}'`,
  Powershell: `$headers = @{
  "Content-Type" = "application/json"
  "Authorization" = "Basic <Api_Key>"
}
$body = '{"country_code":"91","mobile":"xxxxx","sid":"**"}'
Invoke-RestMethod -Uri "https://console.authkey.io/restapi/requestjson.php" -Method Post -Headers $headers -Body $body`,
  "C#": `using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
class Program {
  static async Task Main() {
    using var client = new HttpClient();
    client.DefaultRequestHeaders.Add("Authorization", "Basic <Api_Key>");
    var content = new StringContent("{\"country_code\":\"91\",\"mobile\":\"xxxxx\",\"sid\":\"**\"}", Encoding.UTF8, "application/json");
    var response = await client.PostAsync("https://console.authkey.io/restapi/requestjson.php", content);
    string result = await response.Content.ReadAsStringAsync();
    Console.WriteLine(result);
  }
}`,
  "Node.js": `var request = require('request');
var options = {
  method: 'POST',
  url: 'https://console.authkey.io/restapi/requestjson.php',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Basic <Api_Key>'
  },
  body: JSON.stringify({
    "country_code": "91",
    "mobile": "xxxxx",
    "sid": "**"
  })
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});`,
  Ruby: `require 'net/http'
require 'json'
uri = URI('https://console.authkey.io/restapi/requestjson.php')
req = Net::HTTP::Post.new(uri, 'Content-Type' => 'application/json')
req['Authorization'] = 'Basic <Api_Key>'
req.body = {country_code: '91', mobile: 'xxxxx', sid: '**'}.to_json
res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) {|http| http.request(req)}
puts res.body`,
  Swift: `import Foundation
var request = URLRequest(url: URL(string: "https://console.authkey.io/restapi/requestjson.php")!)
request.httpMethod = "POST"
request.addValue("application/json", forHTTPHeaderField: "Content-Type")
request.addValue("Basic <Api_Key>", forHTTPHeaderField: "Authorization")
let body: [String: Any] = ["country_code": "91", "mobile": "xxxxx", "sid": "**"]
request.httpBody = try? JSONSerialization.data(withJSONObject: body)
let task = URLSession.shared.dataTask(with: request) { data, response, error in
  if let data = data {
    print(String(data: data, encoding: .utf8)!)
  }
}
task.resume()`
};

const ApiCodesSnippetsOfAll = ({ name, desc }) => {
  const [selectedLang, setSelectedLang] = useState("Node.js");
  return (
    <div className="my-6 p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600 mb-4">{desc}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.keys(codeSnippets).map(lang => (
          <button
            key={lang}
            onClick={() => setSelectedLang(lang)}
            className={`px-3 py-1 rounded text-sm font-medium ${
              selectedLang === lang ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            {lang}
          </button>
        ))}
      </div>
      <pre className="bg-black p-4 rounded overflow-x-auto text-md text-green-500">
        <code>{codeSnippets[selectedLang]}</code>
      </pre>
    </div>
  );
};

export default ApiCodesSnippetsOfAll;


