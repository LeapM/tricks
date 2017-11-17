## SSH
connect to remote server by ssh

`ssh -i "$HOME/.ssh/llmgrouppty_productionserver.pem" ubuntu@ec2-54-206-58-182.ap-southeast-2.compute.amazonaws.com`

create a virtual channel

`ssh -fN -i "$HOME/.ssh/llmgrouppty_productionserver.pem" -L 27018:localhost:27017 ubuntu@ec2-54-206-58-182.ap-southeast-2.compute.amazonaws.com`