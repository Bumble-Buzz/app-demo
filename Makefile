install:
	npm install

install-clean:
	rm -fr package-lock.json || true
	rm -fr node_modules || true
	npm install
	npm i --package-lock-only

package-lock:
	rm -fr package-lock.json || true
	npm i --package-lock-only

###################

dev:
	export NEXT_PUBLIC_APP_ENV=dev; npm run dev

devStart:
	export NEXT_PUBLIC_APP_ENV=dev && npm run build && npm run start

build:
	npm run build

start:
	npm run start

###################

push:
	docker build \
	-t bumblebuzz-demo . --no-cache
	docker tag bumblebuzz-demo:latest 817932929274.dkr.ecr.us-east-1.amazonaws.com/bumblebuzz-demo:v0.1.0
	docker push 817932929274.dkr.ecr.us-east-1.amazonaws.com/bumblebuzz-demo:v0.1.0

###################
