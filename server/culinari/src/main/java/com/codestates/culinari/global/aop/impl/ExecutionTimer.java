package com.codestates.culinari.global.aop.impl;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;
import org.springframework.util.StopWatch;

@Slf4j
@Aspect
@Component
public class ExecutionTimer {

    // 조인포인트
    @Pointcut("@annotation(com.codestates.culinari.global.aop.ExeTimer)")
    private void timer(){};

    //메서드 실행 전, 후 시간 공유
    @Around("timer()")
    public void AssumeExecutionTime(ProceedingJoinPoint joinPoint) throws  Throwable{

        StopWatch stopWatch = new StopWatch();

        stopWatch.start();
        joinPoint.proceed(); // 조인포인트 메서드 실행
        stopWatch.stop();

        long totalTimeMillis = stopWatch.getTotalTimeMillis();

        MethodSignature signature = (MethodSignature) joinPoint.getSignature();
        String methodName = signature.getMethod().getName();

        log.info("실행 메서드 : {} , 실행 시간 = {} ms", methodName, totalTimeMillis);
    }
}
