// 문제 설명
// 화성에서 새로운 물질을 발견했습니다. 지구인들은 발견한 물질을 지구로 가져오기 위해 화성으로 로봇을 보냈습니다.

// 로봇은 2차원 배열 형태의 화성 지도를 가지고 있습니다. 로봇이 가지고 있는 지도에는 로봇의 현재 위치, 목적지 위치, 그리고 장애물들 위치가 입력되어 있습니다. 로봇은 상, 하, 좌우로 한 칸씩 이동할 수 있으며, 이동하는데 1만큼의 전력을 소모하고, 장애물 1개를 제거하는데 c만큼의 전력을 소모합니다.

// 로봇을 조작하여 새로운 물질까지 최소한의 전력으로 이동해야 합니다.

// 화성의 지도 정보 board와 장애물을 제거하는데 필요한 비용 c가 매개변수로 주어질 때, 로봇이 목적지까지 도달하는데 필요한 최소 전력량을 return 하는 solution 함수를 완성해주세요.

// 제한 사항
// 로봇은 지도 밖으로 이동할 수 없습니다.
// 지도의 가로, 세로 길이는 2 이상 100 이하입니다.
// 장애물을 제거하는 비용 c는 0 이상 100 이하인 정수입니다.
// 장애물이 없는 지역은 0, 장애물이 있는 지역은 1, 로봇의 현재 위치는 2 그리고 로봇이 도착해야 할 목적지는 3으로 주어집니다.
// 로봇의 현재 위치와 도착해야 할 목적지는 반드시 1개만 있습니다.
// 입출력 예
// board    c    result
// [ [0,0,0,0,2,0,0,0,0,0],[0,0,1,1,1,1,1,0,0,0],[0,0,1,1,1,1,1,1,0,0],[0,0,1,1,1,1,1,0,1,0],[0,0,1,1,1,1,1,0,0,0],[0,0,0,0,3,0,0,0,1,0]]    1    9
// [ [0,0,0,0,2,0,0,0,0,0],[0,0,1,1,1,1,1,0,0,0],[0,0,1,1,1,1,1,1,0,0],[0,0,1,1,1,1,1,0,1,0],[0,0,1,1,1,1,1,0,0,0],[0,0,0,0,3,0,0,0,1,0]]    2    11
// 입출력 설명
// 입출력 예 #1
// 아래 그림처럼 4개의 장애물을 제거하면 이동하는데 5, 장애물을 제거하는데 4만큼 전력이 필요하며, 총 9만큼의 전력으로 이동할 수 있습니다.
// 그림1.png

// 입출력 예 #2
// 아래 그림처럼 이동하면 11만큼의 전력으로 이동할 수 있습니다.
// 그림2.png
