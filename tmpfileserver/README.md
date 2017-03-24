# tmp file server

### Installation
- Change the paths in tmpfileserver.service
- Change RCLOUD_HOSTNAME to rcloud's full host name with port number (example: http://127.0.0.1:8080) in server.js

```sh
$ cd tmpfileserver
$ npm install
$ cp tmpfileserver.service /etc/systemd/system
$ systemctl enable tmpfileserver
$ systemctl start tmpfileserver
```