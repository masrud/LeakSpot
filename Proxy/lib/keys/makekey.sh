openssl req -new -out san_domain_com.csr -key san_domain_com.key -config ./openssl.conf

openssl x509 -req -in san_domain_com.csr -CA rootCA.pem -CAkey rootCA.key -CAcreateserial -out san_domain_com.crt  -extensions v3_req -days 500 -extfile ./openssl.conf

#cp san_domain_com.* ../
