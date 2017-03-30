#测试目录
TESTS = tests/*
REPORTER = spec
TIMEOUT = 10000
JSCOVERAGE = istanbul

#执行测试用例
test:
	@NODE_ENV=test mocha -R $(REPORTER) -t $(TIMEOUT) $(TESTS)
#测试用例覆盖率
test-cov: lib-cov
	@LIB_COV=1 $(MAKE) test REPORTER=dot
lib-cov:
	@rm -rf ./coverage
	@$(JSCOVERAGE) cover _mocha $(TESTS)
clean:
	@rm coverage.html
	@rm -rf ./coverage

.PHONY: test test-cov lib-cov
