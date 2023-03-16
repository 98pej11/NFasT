### IPFS 학습

ipfs add <파일명(위치)>
![image](/uploads/4a23f16ac3e9ce7d0ddf920f7b593119/image.png)
ipfs daemon 
![image](/uploads/a342ade4eb64aa23cca781438fb0bb8d/image.png)

입력하면 파일을 업로드 한 것을 볼 수 있다. 
(원래라면 목록이 뜨고 그 목록에 뜬 데이터는 https://ipfs.io/ipfs/<CID> 를 통해 사진을 아래와 같이 조회할 수 있다.)

![image](/uploads/3a48b0563d07d4a9cbbbc7fd4638a9b1/image.png)


그러나 현재 상황에서는 다음과 같이 작동 됩니다.

![image](/uploads/e86ac56a76d3558c0657716521b6b57b/image.png)
![image](/uploads/6a559c638c74bdee3cd304e8b879b684/image.png)
![image](/uploads/c9ad9813d4d361594175c36d607574d4/image.png)

현재 아직 원인이 명확히 파악되지는 않은 상태이며 ngrok를 통해서 해결이 가능한 것으로 판단되어 실행 해볼 예정 입니다.


### IPFS 사용법

- 네트워크에 데이터 업로드 방법
    - ipfs add <파일위치/파일>
- 데이터 확인하기 위해 서버 오픈
    - ipfs daemon
- Local gateway vs Public gateway
    - 위와 같은 방법으로 데이터를 업로드 시 Local gateway에 데이터가 업로드 되고 public gateway에서는 확인 불가. 따라서  https://ipfs.io/ipfs/<CID>를 통해서 데이터 확인 불가
    - 현재 SSAFY에서 제공하는 노트북에서는 peer가 연결이 안되는데 이는 ubuntu에서 배포한 서버에서는 접근 가능한 것으로 보아 방화벽 문제로 추정
    - 그러나 ubuntu에서 파일을 업로드 하여도 public gateway에서 조회 불가
    - 그러나 다음 명령어를 통해 업로드된 파일을 다운은 가능하다.
    - sudo docker exec ipfs_host ipfs get <CID> -o /export
    - sudo docker exec ipfs_host를 사용하는 이유는 ubuntu 위에 ipfs가 docker container 위에 설치되어져 있기 때문이다.
     

