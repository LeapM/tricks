# SSH

## install ssh on raspbian
1. login in with username pi and password raspberry

2. `sudo raspi-config

3. follow the screen to enable ssh

## enable password less login  [raspi document](https://www.raspberrypi.org/documentation/remote-access/ssh/passwordless.md)

1. generate new ssh key `ssh-keygen -t rsa -C pi@raspi`

2. copy the public key to pi `cat ~/.ssh/id_rsa.pub | ssh <USERNAME>@<IP-ADDRESS> 'cat >> .ssh/authorized_keys'`

##connect to remote server by ssh

`ssh -i "$HOME/.ssh/llmgrouppty_productionserver.pem" ubuntu@ec2-54-206-58-182.ap-southeast-2.compute.amazonaws.com`

##create a virtual channel

`ssh -fN -i "$HOME/.ssh/llmgrouppty_productionserver.pem" -L 27018:localhost:27017 ubuntu@ec2-54-206-58-182.ap-southeast-2.compute.amazonaws.com`