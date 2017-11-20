## how to add new disk 
please refer to [linux tutorial](http://www.yolinux.com/TUTORIALS/LinuxTutorialAdditionalHardDrive.html)

### list all disk

1. `lsblk`
2. modern linux has symbolic link at `dev/disk`
3. disk partition is @ `/process/partitions`
### find the new disk
`/dev/sda for SATA, /dev/hda for IDE /dev/sda for SCSI`

### partition the disk
`fdisk /dev/***`

### format disk
`sudo mkfs -t ext4 -L disk2 /dev/sdb1`

### mount 
please refer to fstab and amount.md
