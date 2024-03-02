### DESCRIPTION
#
> - Below samples are based on  the Postman API Platform.

<br />
<br />



### FILE UPLOAD
#

```plaintext
Method : POST
URL : http://localhost:11000/api/files/upload
Form-Data :
    bucketName : Text
    bucketRegion : Text
    bucketAccessKeyId : Text
    bucketSecretAccessKey : Text
    file : File
```

<br />
<br />



### FILE DELETE
#

```plaintext
Method : POST
URL : http://localhost:11000/api/files/delete
Form-Data :
    bucketName : Text
    bucketRegion : Text
    bucketAccessKeyId : Text
    bucketSecretAccessKey : Text
    key : Text
```

<br />
<br />



### FILE URL

```plaintext
Method : POST
URL : http://localhost:11000/api/files/upload
Form-Data :
    bucketName : String
    bucketRegion : String
    bucketAccessKeyId : String
    bucketSecretAccessKey : String
    key : Text
```
