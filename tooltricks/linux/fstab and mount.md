# /etc/fstab
fstab lists other file system to be mounted into the linux file system structure
[wiki link](https://en.wikipedia.org/wiki/Fstab)

## File structure
`# device-spec   mount-point     fs-type      options   (fs-freq)dump    pass`

column 1: device-spec can be the dev name /dev/, uuid, network location

column 3: typical file format:ext2 ,ext3, ext4, xfs vfat, ntfs. `xfs` **strongly recommend for mongodb**

column 4: default value: rw, suid, dev, exec, auto, nouser, relatime and async. **change to noatime for mongodb**

column 5: 0 or 1, 0 disable the backup. majority should be 0

column 6: 0, 1, or 2. root disk should be 1, the rest should be 2. 0 will disable fsck checking


## Sample entry

# mount & unmount
## list all mounted system
command `mount`

## Add new file system permanently
1. modify the fstab file
2. `sudo mount -a`

## Add new file system temp
`sudo mount /dev/hda2 /media/PHOTOS`

## Add new volume AWS [aws link](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-using-volumes.html)
1. create EC2 volume on AWS website
2. find and confirm the device xvd[--aphp--] by using `lsblk`
3. check if there is existing file system by `sudo file -s /dev/xvd[]`. If output is /dev/xvd[]: data, format is required
3. format if required `sudo mkfs -t ext4 /dev/xvd[]`
4. follow the above section to add the volume perm or temp

## remount with differernt option
`sudo mount -o remount,rw /dev/hda2`


