;; Config updated 2026-05-30T22:54:44Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u64)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)
