package com.example.board.repository;

import com.example.board.constant.UserStatusType;
import com.example.board.domain.Board;
import com.example.board.domain.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserInfoRepository extends JpaRepository<UserInfo, String> {


    @Query(value = "select NEXTVAL('seq_user_info_pk');", nativeQuery = true)
    long getNextUserInfoId();

    Optional<UserInfo> findByUserInfoId(String id);

    long countByUserInfoIdAndStatus(String id, UserStatusType status);

    Optional<UserInfo> findByUsername(String username);

    long countByUsername(String username);
}
