import axios from "axios";

const API_BASE_URL = "https://dev.moviepunk.o-r.kr/api/movies";

export const getNowPlaying = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/now_playing`);
    return response.data;
  } catch (error) {
    console.error("Error fetching now playing movies:", error);
    throw error;
  }
};

export const getTopRated = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/top_rated`);
    return response.data;
  } catch (error) {
    console.error("Error fetching top rated movies:", error);
    throw error;
  }
};

export const getTopLiked = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/top_liked`);
    return response.data;
  } catch (error) {
    console.error("Error fetching top liked movies:", error);
    throw error;
  }
};

export const getMovieByMovieId = async (id: number) => {
  try {
    console.log(`무비 아이디 : ${id}`);
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

export const getVideosByMovieId = async (id: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/videos/${id}`);
    console.log("트레일러 요청이다", response.data);
    const videos = response.data;
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    return randomVideo;
  } catch (error) {
    console.error("트레일러 요청 실패다 ", error);
    throw error;
  }
}

export const getMoviesByMovieId = async (id: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/images/${id}`);
    console.log("이미지 요청이다" + response.data);
    const images = response.data;
    return images;
  } catch (error) {
    console.error("이미지 요청 실패다", error);
    throw error;
  }
}

// 유저가 찜한 무비들 API 가져오기
export const getLikedMovies = async (memberNo: number) => {
  try {
    console.log("멤버 번호 : "+memberNo); // memberNo 잘 받았나 확인
    const response = await axios.get(`/api/movies/likes/${memberNo}`); // 서버에서 가져오기
    console.log("리스폰스 데이터 !!!!!" + response); // 서버에서 잘 가져왔나 확인
    return response.data;
  } catch (error) {
    console.error('좋아요 누른 영화 가져오기 실패 !!!', error); // 실패시 에러 로그 출력
  }
};