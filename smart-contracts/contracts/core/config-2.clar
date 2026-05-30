;; Config updated 2026-05-30T08:59:36Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u9)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)
