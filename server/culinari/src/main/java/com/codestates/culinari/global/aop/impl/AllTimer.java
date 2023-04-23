package com.codestates.culinari.global.aop.impl;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;

@Slf4j
@Aspect
@Component
public class AllTimer {

    @Around("execution(* com.codestates..*(..))")
    public Object executeTime(ProceedingJoinPoint joinPoint) throws  Throwable{
        long start = System.currentTimeMillis();
        log.info("START : {} " ,start);

        try{
            return joinPoint.proceed();
        } finally {
            long finish = System.currentTimeMillis();
            long timeMs = finish - start;

            MethodSignature signature = (MethodSignature) joinPoint.getSignature();
            String methodName = signature.getMethod().getName();

            log.info("END : {} , 실행 메서드: {} ,실행시간 : {}", finish,methodName,timeMs);
        }
    }
}
